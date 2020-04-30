export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;
  let topToBust = measurements.highBust / 4 - inch;

  // Design pattern here

  // Points
  points.nine = new Point(0, 0);  // origin
  points.one = points.nine.translate(-(measurements.highBust / 4 + inch / 2), measurements.naturalWaistToUnderarm);
  points.four = points.one.shift(0, measurements.naturalWaist / 4 + inch / 8);
  points.eight = points.one.shift(0, measurements.bustSpan / 2);
  points.eightL = points.eight.shift(180, options.waistdartwidth / 2);
  points.eightR = points.eight.shift(0, options.waistdartwidth / 2);
  points.zero = points.one.shift(90, measurements.topToWaist);
  points.two = points.zero.shift(-90, topToBust);
  points.seven = points.eight.shift(90, options.waistdartlength);
  points.eleven = points.zero.shift(-90, 2.5 * inch);   // constant

  // Path
  paths.seam = new Path()
    .move(points.eleven)
    .line(points.one)
    .line(points.eightL)
    .line(points.seven)
    .line(points.eightR)
    .line(points.four)
    .line(points.nine)

  // Complete?
  if (complete) {
    if (sa) {
    }
    // Paperless?
    if (paperless) {
    }
  }
  return part;
}