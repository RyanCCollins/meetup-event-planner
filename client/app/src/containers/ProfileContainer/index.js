import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProfileActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ToastMessage, LoadingIndicator, UserProfile } from 'components';
import * as AppActions from 'components/App/actions';

class Profile extends Component {
  constructor() {
    super();
    this.handleClearError = this.handleClearError.bind(this);
    this.handleEditingBio = this.handleEditingBio.bind(this);
    this.handleSavingBio = this.handleSavingBio.bind(this);
    this.handleClickBio = this.handleClickBio.bind(this);
  }
  handleClearError() {
    const {
      profileClearError,
    } = this.props.actions;
    profileClearError();
  }
  handleClickBio() {
    const {
      profileCancelEditing,
      profileStartEditing,
    } = this.props.actions;
    profileStartEditing();
    window.addEventListener('click', (event) => {
      if (!event.target.tagName.toUpperCase() === 'TEXTAREA') {
        profileCancelEditing();
      }
    });
  }
  handleEditingBio(e) {
    const {
      profileEditBio,
    } = this.props.actions;
    profileEditBio(e.target.value);
  }
  handleSavingBio() {
    const {
      updateProfile,
      bioInput,
      actions,
      authToken,
      refetch,
    } = this.props;
    window.removeEventListener('click');
    const profile = {
      bio: bioInput,
    };
    const variables = {
      authToken,
      profile,
    };
    actions.profileSubmissionInitiation();
    updateProfile(variables)
      .then(() => {
        refetch();
        actions.profileSubmissionSuccess();
      })
      .catch(err => {
        actions.profileSubmissionFailure(err.message);
      });
  }
  render() {
    const {
      authUser,
      loading,
      error,
      submissionError,
      isEditingBio,
      bioInput,
    } = this.props;
    return (
      <div className={styles.profile}>
        {loading &&
          <LoadingIndicator isLoading={loading} />
        }
        {submissionError &&
          <ToastMessage
            status="critical"
            message={submissionError}
            onClose={this.handleClearError}
          />
        }
        {authUser &&
          <UserProfile
            user={authUser}
            onEditBio={this.handleEditingBio}
            onClickBio={this.handleClickBio}
            isEditingBio={isEditingBio}
            onSaveBio={this.handleSavingBio}
            bioInput={bioInput}
          />
        }
      </div>
    );
  }
}

Profile.propTypes = {
  actions: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
  authUser: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isEditingBio: PropTypes.bool.isRequired,
  bioInput: PropTypes.string,
  submissionError: PropTypes.string,
  updateQueries: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  authUser: state.appState.user,
  authToken: state.appState.authToken,
  isEditingBio: state.profileContainer.isEditingBio,
  bioInput: state.profileContainer.bioInput,
  submissionError: state.profileContainer.error,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      AppActions,
      ProfileActionCreators
    ),
    dispatch
  ),
});

const Container = cssModules(Profile, styles);

const fetchUserData = gql`
  query getAuthUser($token:String!) {
    authUser(auth_token: $token) {
      ...authUserData
    }
  }

  fragment authUserData on AuthUser {
    id
    bio
    email
    name
    avatar
  }
`;

const ContainerWithData = graphql(fetchUserData, {
  options: (ownProps) => ({
    skip: !ownProps.authToken,
    variables: {
      token: ownProps.authToken,
    },
  }),
  props: ({ data: { loading, authUser, error, refetch } }) => ({
    loading,
    error,
    authUser,
    refetch,
  }),
})(Container);

const updateProfileMutation = gql`
  mutation updateProfile($profile: ProfileInput, $authToken: String!) {
    UpdateProfile(input: { profile: $profile, auth_token: $authToken }) {
      authUser {
        ...authUserData
      }
    }
  }

  fragment authUserData on AuthUser {
    id
    bio
    email
    name
    avatar
  }
`;

const ContainerWithMutation = graphql(updateProfileMutation, {
  props: ({ ownProps, mutate }) => ({
    updateProfile({ authToken, profile }) {
      return new Promise((resolve, reject) =>
        mutate({
          variables: { authToken, profile },
        })
        .then(mutationResult => {
          ownProps.actions.setUser(mutationResult.data.UpdateProfile.authUser);
          resolve(mutationResult);
        })
        .catch(err => reject(err))
      );
    },
  }),
})(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
