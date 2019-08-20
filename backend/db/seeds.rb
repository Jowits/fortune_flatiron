# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all;
Fortune.delete_all
UserFortune.delete_all

user1 = User.create(username: "devlou7", password: "helloworld")
user2 = User.create(username: "jowitajowita", password: "jowita")

fortune1 = Fortune.create(content: "It’s blog time, everyone includes at least one cat gift for Jowita, you appreciate them to so that’s fortuitous.")
fortune2 = Fortune.create(content: "Graduation day! Congratulations! You made it - and you’re a coding wizard.")
fortune3 = Fortune.create(content: "Bad times, imposter syndrome strikes and you feel like a simple egg.")
fortune4 = Fortune.create(content: "Uh oh, you failed the code challenge, not to worry - there is a retake in a week.")
fortune5 = Fortune.create(content: "It’s Graduation Day!!! And all you hear is the applause applause applause as you exit Flatiron gracefully.")
fortune6 = Fortune.create(content: "Feelings in Borg now! ")
fortune7 = Fortune.create(content: "Too much free beer…")
fortune8 = Fortune.create(content: "All work and no play makes you a dull coder.")
fortune9 = Fortune.create(content: "The road to riches is paved with homework labs.")
fortune10 = Fortune.create(content: "The program “fortune” is currently not installed.")
fortune11 = Fortune.create(content: "You can install it by typing $ gem install fortune-mod.")
fortune12 = Fortune.create(content: "There’s always one more bug.")
fortune13 = Fortune.create(content: "Never program and drink beer at the same time.")
fortune14 = Fortune.create(content: "What’s the object-oriented way to become wealthy?...Inheritance")
fortune15 = Fortune.create(content: "No one reads your blog.")
fortune16 = Fortune.create(content: "The code challenges have always been hard but you can do it!")
fortune16 = Fortune.create(content: "Don’t be afraid of moving forward and becoming a wizard!")
fortune17 = Fortune.create(content: "Become a wizard of your destiny!")
fortune18 = Fortune.create(content: "Your road to glory will be buggy, but fulfilling.")
fortune19 = Fortune.create(content: "Don’t worry about money... The best things in life are free, except Flatiron.")
fortune20 = Fortune.create(content: "Look inside yourself, the answer is there")
fortune21 = Fortune.create(content: "You don't have to be faster than the bear, you just have to be faster than the slowest guy running away from it.")
fortune22 = Fortune.create(content: "The more you know, the better you are at knowing things.")
fortune23 = Fortune.create(content: "Wrong question - You broke me - Twat.")
fortune24 = Fortune.create(content: "Flying is simple, not hitting the ground is hard.")
fortune25 = Fortune.create(content: "Nuclear annihilation process initialised beep beep.")
fortune26 = Fortune.create(content: "Even a broken clock is right 2 times a day.")
fortune27 = Fortune.create(content: "Something great will come down your chimney.")
fortune28 = Fortune.create(content: "A dark stranger named React Native will tempt you... Avoid these advances and believe in the power of PWA...")
fortune29 = Fortune.create(content: "Watch out for owls.")
fortune30 = Fortune.create(content: "The moment you have anticipated is fast approaching. When you have climbed the mountain, you will wish you were still climbing.")
fortune31 = Fortune.create(content: "Cheese will be a key part of your future.")
fortune32 = Fortune.create(content: "Beware the many socked quicke. It brings bad weather...")


3.times do
    fortunes = UserFortune.create(
      user_id: User.all.map {|user| user.id}.sample,
      fortune_id: Fortune.all.map {|fortune| fortune.id}.sample
    )
  end

puts "-----SEEDED-----"