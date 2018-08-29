import { callbackify } from "util";

const POSTURL =
  "https://kimppakyytiapi.azurewebsites.net/api/Ride/PostOfferRideAsync";

const SEARCHURL =
  "https://kimppakyytiapi.azurewebsites.net/api/Ride/SearchRidesCustomerAsync";
const urlDeleteNicknameRides =
  "https://kimppakyytiapi.azurewebsites.net/api/Ride/DeleteRide?documentId=";

export function searchRide() {
  fetch(SEARCHURL).then(result => result.json());
}

export function OfferNewRide(offer) {
  fetch(POSTURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nickname: offer.nickname,
      startAddress: offer.startAddress,
      targetAddress: offer.targetAddress,
      startTime: offer.startTime,
      endTime: offer.endTime,
      offeringRide: true,
      mondayFrequency: offer.mondayFrequency,
      tuesdayFrequency: offer.tuesdayFrequency,
      wednesdayFrequency: offer.wednesdayFrequency,
      thursdayFrequency: offer.thursdayFrequency,
      fridayFrequency: offer.fridayFrequency,
      saturdayFrequency: offer.saturdayFrequency,
      sundayFrequency: offer.sundayFrequency
    })
  })
    .then(res => {
      console.log("OfferNewRide", res);
      // this.setState({ offer: {} });
    })
    .catch(err => {
      console.error("OfferNewRidevirhe", err);
    });
}

export function deleteRideFromApi(id, callback) {
  fetch(urlDeleteNicknameRides + id, {
    method: "DELETE"
  }).then(callback);
}
