var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/declarations", function (req, res, next) {
  res.json({
    0: {
      section: "80C",
      amount: 500,
      limit: 50000,
      key: "fiveYearFixedDepositScheduledBank",
      label: "5 Years of Fixed Deposit in Scheduled Bank",
    },
    1: {
      section: "80C",
      amount: 0,
      limit: 25000,
      key: "childrenTuitionFees",
      label: "Children Tuition Fees",
    },
    2: {
      section: "80C",
      amount: 0,
      limit: 150000,
      key: "depositInNSC",
      label: "Deposit in National Savings Certificate",
    },
    3: {
      section: "80D",
      amount: 18000,
      key: "preventiveHealthCheckupDependantParents",
      label: "Preventive Health Checkup - Dependant Parents",
      limit: 50000,
    },
    4: {
      section: "80D",
      amount: 12000,
      key: "medicalBillsVerySeniorCitizen",
      label: "Medical Bills - Very Senior Citizen",
      limit: 25000,
    },
    5: {
      section: "80G",
      amount: 8000,
      key: "donation100PrcntExemption",
      label: "80G - Donation - 100% Exemption",
      limit: 0,
    },
    6: {
      section: "80G",
      amount: 5000,
      key: "donation50PrcntExemption",
      label: "80G - Donation - 50% Exemption",
      limit: 0,
    },
  });
});

module.exports = router;
