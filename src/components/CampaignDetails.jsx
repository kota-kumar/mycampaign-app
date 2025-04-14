import React from "react";

const CampaignDetails = ({ aemLinks = [], damLinks = [] }) => {
  const openAllLinks = () => {
    const allLinks = [...aemLinks, ...damLinks];
    for (let i = 0; i < allLinks.length; i++) {
      const win = window.open(allLinks[i], '_blank');
      if (!win) {
        alert("Your browser blocked a popup. Please allow popups for this site.");
        break;
      }
    }
  };  

  return (
    <div className="bg-blue-50 p-4 rounded-xl mt-6 space-y-4 shadow">
      <h2 className="text-xl font-semibold text-blue-700">🔍 Campaign Details</h2>

      <div>
        <strong className="block mb-1">AEM Author Links:</strong>
        {aemLinks.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {aemLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No AEM links available.</p>
        )}
      </div>

      <div>
        <strong className="block mb-1">DAM Links:</strong>
        {damLinks.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {damLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No DAM links available.</p>
        )}
      </div>

      <button
        onClick={openAllLinks}
        className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        🚀 Open All Links
      </button>
    </div>
  );
};

export default CampaignDetails;
