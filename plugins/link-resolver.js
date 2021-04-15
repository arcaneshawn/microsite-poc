export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'pagev2') {
    return '/' + doc.uid;
  }

  if (doc.type === 'subpage') {
    console.log('Doc Type: ' + doc.type)
    return '/:parentpage/' + doc.uid + '-page';
  }

  return '/not-found';
}
