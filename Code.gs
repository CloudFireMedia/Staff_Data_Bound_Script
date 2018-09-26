var SCRIPT_NAME = 'Staff_Data_Bound_Script'
var SCRIPT_VERSION = 'v1.4'

function onOpen() {
  SpreadsheetApp
    .getUi()
      .createMenu("CloudFire")
        .addItem("Initialize", "initialize")      
        .addItem("Update Staff Folders in Google Drive", "staffFolders")
        .addItem("Update Event Sponsorship Pages for Teams", "maintainPromotionCalendar")
        .addToUi();
}

// Menu Options
function staffFolders()              {StaffData.staffFolders()}
function maintainPromotionCalendar() {StaffData.maintainPromotionCalendar()}
function Initialize()                {StaffData.Initialize()}

// Triggers
function onInstallableEdit(event)    {StaffData.onEdit(event)}