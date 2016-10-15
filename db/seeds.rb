10.times do
  Host.create(name: FFaker::Name.name)
end

20.times do
  Guest.create(
    name: FFaker::Name.name
  )
end

User.create(
  name: 'GraphQL User',
  email: 'user@graphql.org',
  password: 'GraphQLUser123'
)

Event.create(
  name: 'Alumni App Release Party',
  user: User.first,
  event_type: 4,
  start_date: '10/06/2016 5:00PM',
  end_date: '10/06/2016 7:00PM',
  host: Host.create(name: 'Ryan Collins'),
  guests: 7.times.map{ Guest.all.sample },
  message: 'Join us to celebrate the release of the alumni web application.  We will have an online celebration as well as an in-person meetup at Udacity headquarters.',
  location: '2465 Latham Street, 3rd Floor., Mountain View, CA 94040'
)

Event.create(
  name: 'GraphQL Summit',
  guests: 7.times.map{ Guest.all.sample },
  host: Host.create(name: 'Sashko Stubailo'),
  start_date: '10/26/2016 9:00AM',
  end_date: '10/26/2016 7:00PM',
  location: '601 19th St, San Francisco, CA 94107',
  user: User.first,
  event_type: 5,
  message: 'Announced by Facebook in early 2015, GraphQL is an application data query language that lets developers describe the complex, nested data dependencies of modern applications. You can use GraphQL with any language or platform to define your backends as well-defined, graph-based schemas while allowing client apps to independently batch and fetch data very efficiently. Come spend a day exploring the technology and meeting the community that supports it!'
)

Event.create(
  name: 'ReactJS SF',
  guests: 7.times.map{ Guest.all.sample },
  host: Host.create(name: 'Devon Lindsey'),
  start_date: '11/10/2016 6:30PM',
  end_date: '11/10/2016 9:30PM',
  location: '535 Mission St, Suite 700, San Francisco, CA',
  user: User.first,
  event_type: 5,
  message: "ReactJs is a fun, easy to use Javascript library started by Facebook and maintained by *you*. Join us if you'd like to learn more or if you have your own ReactJs experience to share that others can benefit from."
)
