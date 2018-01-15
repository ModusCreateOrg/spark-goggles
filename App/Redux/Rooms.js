export const GET_ROOMS = 'rooms/GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'rooms/GET_ROOMS_SUCCESS';
export const GET_ROOMS_ERROR = 'rooms/GET_ROOMS_ERROR';

export const getRooms = () => ({
  type: GET_ROOMS,
  payload: { data: null, error: null, loading: true }
});

export const getRoomsSuccess = data => ({
  type: GET_ROOMS_SUCCESS,
  payload: { data, error: null, loading: false }
});

export const getRoomsError = error => ({
  type: GET_ROOMS_ERROR,
  payload: { error, data: null, loading: false }
});

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ROOMS:
    case GET_ROOMS_SUCCESS:
    case GET_ROOMS_ERROR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
