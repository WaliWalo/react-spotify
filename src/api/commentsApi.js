export async function fetchCommentsById(id) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let comments = await response.json();
      return comments;
    } else {
      throw new Error("Could not fetch comments!");
    }
  } catch (er) {
    console.log(er);
  }
}

export async function submitComment(comment) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let newComment = await response.json();
      return newComment;
    } else {
      throw new Error("Could not add  comment!");
    }
  } catch (er) {
    console.log(er);
  }
}
