class Location < ApplicationRecord
    has_many :lodgings
    has_many :users, through: :lodgings

    # validations
end
