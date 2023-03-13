class LodgingSerializer < ActiveModel::Serializer
  attributes :id, :link, :guests, :season, :dates
  has_one :location
  has_one :user
end
