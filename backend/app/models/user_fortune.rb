class UserFortune < ApplicationRecord
  belongs_to :user
  belongs_to :fortune
end
