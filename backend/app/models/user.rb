class User < ApplicationRecord
    has_many :user_fortunes
    has_many :fortunes, through: :user_fortunes
    validates :username, uniqueness: { case_sensitive: false }
end
