class Lodging < ApplicationRecord
  belongs_to :location
  belongs_to :user

  # validations also in front end, error messages
end
