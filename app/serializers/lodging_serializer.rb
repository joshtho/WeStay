class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :link, :guests, :season, :dates, :image, :location, :user
  has_one :location
  belongs_to :user
end

