class User < ApplicationRecord
    has_many :lodgings
    has_many :locations, through: :lodgings
    has_secure_password

    # def user_locations 
    #     locations = Location.all
    #     locations.map do |location| location.user_id == @current_user.id
    #     end
    # end

    validates :username, presence: true
end
