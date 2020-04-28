export default function (part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();

  // Design pattern here

  // Points on the right side
  points.zero = new Point(0, 0);
  points.one = new Point(0, 356);
  points.two = new Point(0, 203);
  points.three = new Point((0.25 * (measurements.bustRound) + 25.4), 203.2);
  points.four = new Point((0.25 * (measurements.waistRound) + 25.4), 356);
  points.five = new Point(measurements.shoulder / 2, 0);
  points.six = new Point(points.five.x, 12.7);
  points.seven = new Point((0.5 * measurements.bustSpan), points.three.y + 12.7);
  points.eight = new Point(points.seven.x, points.four.y);
  points.eightL = new Point(points.eight.x - 12.7, points.eight.y);
  points.eightR = new Point(points.eight.x + 12.7, points.eight.y);
  points.nine = new Point(points.three.x, points.four.y - 190.5);
  points.eleven = new Point(0, measurements.bustRound / 12);
  points.twelve = new Point(measurements.bustRound / 12, 0);

  // Control points
  points.twelveCp = points.twelve
    .shift(100, points.eleven.dy(points.twelve) / 2);
  points.elevenCp = points.eleven
    .shift(0, points.eleven.dx(points.twelve) / 1.2);

  points.sixCp = points.six
    .shift(90, points.nine.dy(points.six) / 1.5);
  points.nineCp = points.nine
    .shift(0, points.nine.dx(points.six) / 2);

  // Points on the left side
  points.leftThree = points.three.flipX();
  points.leftFour = points.four.flipX();
  points.leftFive = points.five.flipX();
  points.leftSix = points.six.flipX();
  points.leftSeven = points.seven.flipX();
  points.leftEight = points.eight.flipX();
  points.leftEightL = points.eightR.flipX();
  points.leftEightR = points.eightL.flipX();
  points.leftNine = points.nine.flipX();
  points.leftTwelve = points.twelve.flipX();
  points.leftTwelveCp = points.twelveCp.flipX();
  points.leftElevenCp = points.elevenCp.flipX();
  points.leftSixCp = points.sixCp.flipX();
  points.leftNineCp = points.nineCp.flipX();

  paths.armhole = new Path()
    .move(points.six)
    .curve(points.sixCp, points.nineCp, points.nine);

  points.ten = paths.armhole.shiftFractionAlong(0.5);
  points.leftTen = points.ten.flipX();

  paths.seam = new Path()
    .move(points.leftTwelve)
    .line(points.leftSix)
    .curve(points.leftSixCp, points.leftNineCp, points.leftNine)
    .line(points.leftFour)
    .line(points.leftEightL)
    .line(points.leftSeven)
    .line(points.leftEightR)
    .line(points.eightL)
    .line(points.seven)
    .line(points.eightR)
    .line(points.four)
    .line(points.nine)
    .curve(points.nineCp, points.sixCp, points.six)
    .line(points.twelve)
    .curve(points.twelveCp, points.elevenCp, points.eleven)
    .curve(points.leftElevenCp, points.leftTwelveCp, points.leftTwelve)
    .close();

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