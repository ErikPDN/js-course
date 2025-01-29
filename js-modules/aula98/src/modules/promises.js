function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });
}

export default async function asyncCall() {
  await promise().then((response) => {
    console.log(response);
  });
}
