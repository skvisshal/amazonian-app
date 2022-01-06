# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demoUser = User.create!(
    name: 'Demo User',
    email: 'demo@gmail.com',
    password: '123456'
)

u1 = User.create!(
    name: 'Jeff Bezos',
    email: 'jb@gmail.com',
    password: 'password'
)

u2 = User.create!(
    name: 'Elon Musk',
    email: 'em@email.com',
    password: 'password'
)

u3 = User.create!(
    name: 'Bill Gates',
    email: 'bg@email.com',
    password: 'password'
)