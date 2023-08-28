class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :unique_users
  has_many :lodgings
  has_many :users
  def unique_users
    users = self.object.users.uniq
    users.map{|u| u.username}
  end
end
