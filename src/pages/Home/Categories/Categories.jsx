import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center font-custom font-bold mb-10">
        Category
      </h1>
      <div>
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabList className="text-center flex justify-center gap-6 cursor-pointer">
            <Tab className="border-b">Game Franchise</Tab>
            <Tab className="border-b">Toy Type </Tab>
            <Tab className="border-b">Aged</Tab>
          </TabList>    
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList className='flex justify-center my-6'>
                <Tab>Homer Simpson</Tab>
                <Tab>Marge Simpson</Tab>
              </TabList>
              <TabPanel>
                <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
              </TabPanel>
              <TabPanel>
                <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Philip J. Fry</Tab>
                <Tab>Turanga Leela</Tab>
              </TabList>
              <TabPanel>
                <p>
                  Protagonist, from the 20th Century. Delivery boy. Many times
                  great-uncle to Professor Hubert Farnsworth. Suitor of Leela.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Mutant cyclops. Captain of the Planet Express Ship. Love
                  interest of Fry.
                </p>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
                <TabList className="flex justify-center my-6">
                    <Tab>Kids</Tab>
                    <Tab>Kids</Tab>
                </TabList>
                <TabPanel>
                    <p>hello</p>
                </TabPanel>
                <TabPanel>
                    <p>hel</p>
                </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
