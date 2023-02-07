import calculateFaceLocation from "./faceLocation";

const Clarifai = async (imageUrl: string) => {
  const USER_ID = "lkxbxjg5gug3";

  const PAT = "ed7eaddf601d41bd86b51e68bfd5a9cf";
  const APP_ID = "my-first-application";

  const MODEL_ID = "face-detection";
  const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  const res = await fetch(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
    requestOptions
  );
  if (!res.ok) {
    throw new Error(`Could not fetch clarifai API, received ${res.status}`);
  }
  const result = await res.json();
  return calculateFaceLocation(result);
};

export default Clarifai;

// .then((response) => response.json())
//   .then((result) => calculateFaceLocation(result))
//   .catch((error) => console.log("error", error));
