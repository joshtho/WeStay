class User < ApplicationRecord
    has_many :lodgings
    has_many :locations, through: :lodgings
    has_secure_password

    validates :username, presence: true, uniquness: true
end
