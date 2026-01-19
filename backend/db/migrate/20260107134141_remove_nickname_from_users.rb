class RemoveNicknameFromUsers < ActiveRecord::Migration[7.2]
  def change
    remove_column :users, :nickname, :string
  end
end
