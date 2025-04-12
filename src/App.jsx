import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import CampaignDetails from "./components/CampaignDetails";
import "./index.css";
import React from "react";
function App() {
  const [campaignData, setCampaignData] = useState({});
  const [lob, setLob] = useState("");
  const [region, setRegion] = useState("");
  const [campaign, setCampaign] = useState("");

  const [regions, setRegions] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaignDetails, setSelectedCampaignDetails] = useState(null);

  // Load JSON data on mount
  useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) => setCampaignData(data))
      .catch((err) => console.error("Failed to load campaign data", err));
  }, []);

  // Update regions when LOB changes
  useEffect(() => {
    setRegion("");
    setCampaign("");
    setCampaigns([]);
    setSelectedCampaignDetails(null);
    if (lob && campaignData[lob]) {
      setRegions(Object.keys(campaignData[lob]));
    } else {
      setRegions([]);
    }
  }, [lob]);

  // Update campaigns when region changes
  useEffect(() => {
    setCampaign("");
    setSelectedCampaignDetails(null);
    if (lob && region && campaignData[lob]?.[region]) {
      setCampaigns(campaignData[lob][region]);
    } else {
      setCampaigns([]);
    }
  }, [region, lob]);

  // Update campaign details when campaign is selected
  useEffect(() => {
    if (campaign && campaigns.length) {
      const found = campaigns.find((c) => c.campaign === campaign);
      setSelectedCampaignDetails(found || null);
    }
  }, [campaign, campaigns]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
  };

  return (
<div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center text-blue-800">
          📢 Campaign Information
        </h1>
  
        <Dropdown
          label="LOB"
          options={Object.keys(campaignData)}
          value={lob}
          onChange={(e) => setLob(e.target.value)}
        />
  
        <Dropdown
          label="Region"
          options={regions}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          disabled={!lob}
        />
  
        <Dropdown
          label="Campaign"
          options={campaigns.map((c) => c.campaign)}
          value={campaign}
          onChange={(e) => setCampaign(e.target.value)}
          disabled={!region}
        />
  
        {selectedCampaignDetails && (
          <CampaignDetails
            aemLink={selectedCampaignDetails.aemAuthorLink}
            damLink={selectedCampaignDetails.damLink}
          />
        )}
      </div>
    </div>
  );
  
}
export default App;
