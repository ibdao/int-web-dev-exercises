it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(10000, 8, 5.8)).toEqual(130.44);
});

it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(1000, 40, 99)).toEqual(82.5);
});
