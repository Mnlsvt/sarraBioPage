"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function TabPanel({ children, value, index }: any) {
  return (
    <div hidden={value !== index} style={{ padding: "16px" }}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section id="experience" className="py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-green-400 font-mono text-lg mb-8">/ experience</h2>

      <div className="grid grid-cols-[200px_1fr] gap-8">
        {/* LEFT FOLDER LIST */}
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            ".Mui-selected": {
            color: `white`,
            borderLeft: "1px solid white",
            },
          }}
        >
          <Tab label="Uppsala Uni" />
          <Tab label="Theagenio" />
          {/* <Tab label="Amazon" />
          <Tab label="Wattpad" /> */}
        </Tabs>

        {/* RIGHT CONTENT */}
        <div>
          <TabPanel value={value} index={0}>
            <Typography>
              <span className="text-white font-semibold">
                <a href="https://www.uu.se/utbildning/program/masterprogram-precisionsmedicin" target="_blank" className="hover:text-blue-500">Masters in Precision Medicine</a> @
              </span>{" "}
              <span className="text-green-400"><a href="https://www.uu.se/en">Uppsala University</a></span>
              <div className="text-gray-400 text-sm mt-1">
                September 2025 - Present
              </div>

              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-300">
                <li>
                  Started a Master's program in Precision Medicine at the Uppsala University.
                </li>
                {/*<li>
                  Led end-to-end model development for Proxybidder ML systems.
                </li> */}
              </ul>
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography>
                <span className="text-white font-semibold">
                <a href="https://theageneio.gov.gr/en/history/" target="_blank" className="hover:text-blue-500">Biomedical Scientist - 6 Month Internship</a> @
              </span>{" "}
              <span className="text-green-400"><a href="https://theageneio.gov.gr/en/history/">Theageneio Cancer Hospital of Thessaloniki</a></span>
              <div className="text-gray-400 text-sm mt-1">
                November 2022 - April 2023
              </div>

              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-300">
                <li>
                    Performed laboratory tests in specialized labs:
                    Haematology, Biochemistry, Blood Donation, Microbiology,
                    Pathology & Cytology
                </li>
                <li>
                    Utilized Laboratory Information System (LIS) for accurate
                    data entry and management
                </li>
                <li>
                    Conducted challenging blood draws on oncology patients
                    with a focus on comfort and safety
                </li>
                <li>
                    Managed hospital blood collection department, optimizing
                    workflow and ensuring timely sample processing                    
                </li>
              </ul>
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Typography>Amazon experience goes here.</Typography>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Typography>Wattpad experience goes here.</Typography>
          </TabPanel>
        </div>
      </div>
    </section>
  );
}
