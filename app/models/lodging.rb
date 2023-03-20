class Lodging < ApplicationRecord
  belongs_to :location
  belongs_to :user

  validates :dates, presence: true
  validates :guests, presence: true
  validates :image, presence: true
  validates :link, presence: true
  validates :season, presence: true
end
