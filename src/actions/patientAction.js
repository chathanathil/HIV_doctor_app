import axios from "axios";
import {
  OPEN_PATIENT,
  LOADING_OPEN_PATIENT,
  GET_ERRORS,
  PATIENT_ERRORS,
  LOADING_RESULTS,
  GET_RESULTS,
  LOADING_MEDICINE,
  GET_MEDICINE,
  ADD_MEDICINE,
  ADD_RESULT,
  LOADING_ADD_MEDICINE,
  LOADING_ADD_RESULT
} from "./types";

// Open patient
export const openPatient = (id, history) => dispatch => {
  dispatch(setPatientLoading());
  axios
    .get(`http://localhost:8000/api/doctors/patients/open/${id}`)
    .then(res => {
      console.log(id);

      dispatch({
        type: OPEN_PATIENT,
        payload: res.data
      });
      history.push(`/chat/${id}`);
    })
    .catch(err => {
      dispatch({
        type: PATIENT_ERRORS,
        payload: err.response.data
      });
      console.log(id);
    });
};

// Loading Patient
export const setPatientLoading = () => {
  return {
    type: LOADING_OPEN_PATIENT
  };
};

// // Get results
// export const getResults = id => dispatch => {
//   // dispatch(setResultLoading());
//   dispatch(setResultLoading());
//   axios
//     .get(`http://localhost:8000/api/doctors/patients/results/${id}`)
//     .then(res => {
//       dispatch({
//         type: GET_RESULTS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// Open patient
export const getResults = id => dispatch => {
  // dispatch(setResultLoading());
  axios
    .get(`http://localhost:8000/api/doctors/results/${id}`)

    .then(res => {
      dispatch({
        type: GET_RESULTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_RESULTS,
        payload: {}
      });
    });
};

export const setResultLoading = () => {
  return {
    type: LOADING_RESULTS
  };
};

// get medicines
export const getMedicine = id => dispatch => {
  dispatch(setMedicineLoading());
  axios
    .get(`http://localhost:8000/api/doctors/medicines/${id}`)
    .then(res => {
      console.log(id);

      dispatch({
        type: GET_MEDICINE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MEDICINE,
        payload: {}
      });
    });
};

export const setMedicineLoading = () => {
  return {
    type: LOADING_MEDICINE
  };
};

// Add results
export const addResult = newResult => dispatch => {
  dispatch(setAddResultLoading());

  axios
    .post("http://localhost:8000/api/doctors/result/add", newResult)
    .then(res => {
      dispatch({
        type: ADD_RESULT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setAddResultLoading = () => {
  return {
    type: LOADING_ADD_RESULT
  };
};

// Add Medicine
export const addMedicine = newMedicine => dispatch => {
  dispatch(setAddMedicineLoading());

  axios
    .post("http://localhost:8000/api/doctors/medicine/add", newMedicine)
    .then(res => {
      dispatch({
        type: ADD_MEDICINE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setAddMedicineLoading = () => {
  return {
    type: LOADING_ADD_MEDICINE
  };
};
