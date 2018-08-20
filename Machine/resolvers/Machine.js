const Machine = {};

Machine.utilization = (root, args, context) => {
  let dnxUuid = root.dnxUuid;
  return getUtilizationData(dnxUuid); // do some logic that returns the utilization data
};

Machine.production = (root, args, context) => {
  let dnxUuid = root.dnxUuid;
  return getUtilizationData(dnxUuid); // do some logic that returns the utilization data
};

export default Machine;
