10.times do
  title = [
    FFaker::BaconIpsum.word,
    FFaker::BaconIpsum.word
  ].map(&:capitalize).join(' ')
  Post.create(
    title: title,
    text: FFaker::BaconIpsum.paragraphs
  )
end
