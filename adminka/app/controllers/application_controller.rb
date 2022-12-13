class ApplicationController < ActionController::Base
  include Key
  include SchedulerState
end
