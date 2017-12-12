// console.log("yes");
// checkboxFree.addEventListener("change", function(){
//     console.log("hh");
//     inputEventPrice.val() = "";
// });
try {
  btnAddImage.addEventListener("click", function() {
    var boxImage =
      '<div class="boxImage mobileFullWidth box col col-50">\
                        <div class="boxBannerImage"></div>\
                        <div class="delete-bar u_mt-sm">\
                            <div>\
                                <svg class="moveElementUp"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-up"></use></svg>\
                                <svg class="moveElementDown"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-down"></use></svg>\
                            </div>\
                            <button class="orange outline">Delete</button>\
                        </div>\
                    </div>';
    boxImages.insertAdjacentHTML("afterend", boxImage);
  });

  btnAddFacility.addEventListener("click", function() {
    var sFacility = selectFacility.value;
    var sFacilityDescription = txtfacilityDescription.value;
    var boxFacility =
      '<div class="boxSpeaker box col col-100">\
                        <h4>' +
      sFacility +
      "</h4>\
                        <p>" +
      sFacilityDescription +
      '</p>\
                        <div class="delete-bar u_mt-sm">\
                            <div>\
                                <svg class="moveElementUp"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-up"></use></svg>\
                                <svg class="moveElementDown"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-down"></use></svg>\
                            </div>\
                            <button class="orange outline">Delete</button>\
                        </div>\
                    </div>';
    boxFacilities.insertAdjacentHTML("afterend", boxFacility);
    selectFacility.value = "";
    txtfacilityDescription.value = "";
  });

  btnAddSpeaker.addEventListener("click", function() {
    var sSpeakerName = txtSpeakerName.value;
    var boxSpeaker =
      '<div class="boxSpeaker box col col-100">\
                        <p>' +
      sSpeakerName +
      '</p>\
                        <div class="delete-bar u_mt-sm">\
                            <div>\
                                <svg class="moveElementUp"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-up"></use></svg>\
                                <svg class="moveElementDown"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-down"></use></svg>\
                            </div>\
                            <button class="orange outline">Delete</button>\
                        </div>\
                    </div>';
    boxSpeakers.insertAdjacentHTML("afterend", boxSpeaker);
    txtSpeakerName.value = "";
  });

  btnAddSponsor.addEventListener("click", function() {
    var sSponsorName = txtSponsorName.value;
    var boxSonsor =
      '<div class="boxSpeaker box col col-100">\
                        <p>' +
      sSponsorName +
      '</p>\
                        <div class="delete-bar u_mt-sm">\
                            <div>\
                                <svg class="moveElementUp"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-up"></use></svg>\
                                <svg class="moveElementDown"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-down"></use></svg>\
                            </div>\
                            <button class="orange outline">Delete</button>\
                        </div>\
                    </div>';
    boxSponsors.insertAdjacentHTML("afterend", boxSonsor);
    txtSponsorName.value = "";
  });

  btnAddScheduleBlock.addEventListener("click", function() {
    var sScheduleTime = txtScheduleTime.value;
    var sScheduleTitle = txtScheduleTitle.value;
    var sScheduleDescription = txtScheduleDescription.value;
    var boxSchedule =
      '<div class="boxSpeaker box col col-100">\
                        <div class="scheduleTimeTitle">\
                            <h4>' +
      sScheduleTime +
      '</h4>\
                            <h4 class="u_ml-sm">' +
      sScheduleTitle +
      "</h4>\
                        </div>\
                        <p>" +
      sScheduleDescription +
      '</p>\
                        <div class="delete-bar u_mt-sm">\
                            <div>\
                                <svg class="moveElementUp"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-up"></use></svg>\
                                <svg class="moveElementDown"><use viewBox="0 0 24 24" xlink:href="#md-keyboard-arrow-down"></use></svg>\
                            </div>\
                            <button class="orange outline">Delete</button>\
                        </div>\
                    </div>';
    boxSchedules.insertAdjacentHTML("afterend", boxSchedule);
    txtScheduleTime.value = "";
    txtScheduleTitle.value = "";
    txtScheduleDescription.value = "";
  });
} catch (err) {
  console.log("Error in create-event.js");
}

// document.addEventListener("click", function(e){
//     if(e.target.classList.contains("moveElementUp")){

//     }
//     if(e.target.classList.contains("moveElementDown")){
//         console.log("jepper");
//     }
// });
