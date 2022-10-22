import axios from "axios";

const baseUrl = "http://10.106.1.238:5000";

const sendImage = async (data) => {
  return axios({
    method: "POST",
    url: `${baseUrl}/uploadImage/`,
    data,
  });
};

export const utils = { sendImage };
