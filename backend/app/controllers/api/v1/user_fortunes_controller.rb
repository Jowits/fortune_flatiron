class Api::V1::UserFortunesController < ApplicationController

    # def index
    #     user_fortunes = UserFortune.all
    #     render json: user_fortunes
    # end
    def index
        user_fortunes = UserFortune.all
        render json: user_fortunes.to_json(:include => {
          :user => {:only => [:username]},
          :fortune => {:only => [:content]}
        }, :except => [:updated_at])
    end
     
    # def show
    #     user_fortunes = UserFortune.find_by(id: params[:id])
    #     render json: user_fortunes.to_json(:include => {
    #     :bird => {:only => [:name, :species]},
    #     :location => {:only => [:latitude, :longitude]}
    # }, :except => [:updated_at])
    # end

end
