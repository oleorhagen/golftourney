export default function user2ID(userID) {
  if (userID == "olepo") {
    return 1;
  }
  console.error(
    `${userID} is not a known userID. This is most likely a programming error`
  );
  return 0;
}
