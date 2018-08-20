const Query = {};

Query.machines = () => {
  return Machines.find().fetch(); // returns list of machines from DB
};

Query.machines = (root, { dnxUuid }, context) => {
  return Machines.findOne(); // returns a single machine from DB
};

export default Query;
