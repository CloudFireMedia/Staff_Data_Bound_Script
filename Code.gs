var SCRIPT_NAME = 'Staff_Data_Bound_Script'
var SCRIPT_VERSION = 'v0.dev_ajr'

function onOpen(e) {
  SpreadsheetApp
    .getUi()
      .createMenu("[ Push Updates ]")
        .addItem("Update Staff Folders in Google Drive", "staffFolders")
        .addItem("Update Event Sponsorship Pages for Teams", "maintainPromotionCalendar")
        .addToUi();
}

function staffFolders()              {StaffData.staffFolders()}
function maintainPromotionCalendar() {StaffData.maintainPromotionCalendar()}

function onInstallableEdit(event)    {StaffData.onEdit(event)}