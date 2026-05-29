import { Application } from "@hotwired/stimulus"
import ElementDocController from "./element_doc_controller"

const application = Application.start()
window.Stimulus = application

application.register("element_doc", ElementDocController)
