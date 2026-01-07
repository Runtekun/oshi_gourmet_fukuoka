class RenameImageToAvatarInUsers < ActiveRecord::Migration[7.2]
  def change
    rename_column :users, :image, :avatar
  end
end