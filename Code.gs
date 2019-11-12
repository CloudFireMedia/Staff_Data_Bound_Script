var SCRIPT_NAME = 'Staff_Data_Bound_Script'
var SCRIPT_VERSION = 'v1.8'

// Add-on installation

function onInstall(event) {
  console.log(SCRIPT_VERSION)
  console.log(event)
  StaffData.onInstall(event)
}

// Menu

function onOpen(event) {StaffData.onOpen(event)}

// Menu Options

function staffFolders()              {StaffData.staffFolders()}
function maintainPromotionCalendar() {StaffData.maintainPromotionCalendar()}
function initialize()                {StaffData.initialize()}

// Triggers

function onSDInstallableEdit(event) {StaffData.onEdit(event)}
function onSDInstallableChange(event) {StaffData.onChange(event)}

function TEST_misc() {
  Logger.log(PropertiesService.getDocumentProperties().getProperties())
  StaffData.TEST_misc()
  return
}
