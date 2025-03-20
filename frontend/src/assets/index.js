const images = {};

function importAll(r) {
  r.keys().forEach((key) => {
    images[key.replace("./", "").replace(/\.\w+$/, "")] = r(key);
  });
}

importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

export default images;
