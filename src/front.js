export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;
  let naturalWaistToUnderarm = 7.5 * inch;   // Not dynamic
  let topToBust = measurements.chestCircumference / 4 - inch;

  // Design pattern here

  // Points
  points.nine = new Point(0, 0);  // origin
  points.one = new Point(-(measurements.chestCircumference / 4 + inch), naturalWaistToUnderarm);
  points.four = points.one.shift(0, measurements.naturalWaist / 4 + inch);
  points.eight = points.one.shift(0, measurements.bustSpan / 2);
  points.eightL = points.eight.shift(180, inch / 2);
  points.eightR = points.eight.shift(0, inch / 2);
  points.zero = points.one.shift(90, measurements.topToWaist);
  points.five = points.zero.shift(0, measurements.shoulderToShoulder / 2);
  points.six = points.five.shift(-90, inch / 2);
  points.two = points.zero.shift(-90, topToBust);
  points.seven = new Point(points.eight.x, points.two.y + inch / 2);
  points.twelve = points.zero.shift(0, 2.5 * inch);     // constant
  points.eleven = points.zero.shift(-90, 2.5 * inch);   // constant


  // Control points
  points.twelveCp = points.twelve
    .shift(100, points.eleven.dy(points.twelve) / 2);
  points.elevenCp = points.eleven
    .shift(0, points.eleven.dx(points.twelve) / 1.2);

  points.sixCp = points.six
    .shift(90, points.nine.dy(points.six) / 1.5);
  points.nineCp = points.nine
    .shift(0, points.nine.dx(points.six) / 2);


  paths.seam = new Path()
    .move(points.six)
    .curve(points.sixCp, points.nineCp, points.nine);

  points.ten = paths.seam.shiftFractionAlong(0.5);


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