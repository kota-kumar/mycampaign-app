import React from "react";

const CampaignDetails = ({ aemLink, damLink }) => (
  <div className="bg-blue-50 p-4 rounded-xl mt-6 space-y-4 shadow">
    <h2 className="text-xl font-semibold text-blue-700">🔍 Campaign Details</h2>

    <div>
      <strong className="block mb-1">AEM Author Link:</strong>
      <a
        href={aemLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Open AEM Link
      </a>
    </div>

    <div>
      <strong className="block mb-1">DAM Link:</strong>
      <a
        href={damLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Open DAM Link
      </a>
    </div>
  </div>
);

export default CampaignDetails;
