class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :link, :guests, :season, :dates, :image, :location
  has_one :user
end