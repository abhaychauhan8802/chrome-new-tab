import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";
import WebSiteOptions from "./WebSiteOptions";
import AddWebsite from "./AddWebsite";
import { Trash } from "lucide-react";

const WebSites = ({ isEdit }) => {
  const [webSitesData, setWebSitesData] = useState(getFromLocalStorage());
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 720px)" });

  function getFromLocalStorage() {
    let storedData = localStorage.getItem("website-data");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  }

  useEffect(() => {
    localStorage.setItem("website-data", JSON.stringify(webSitesData));
  }, [webSitesData]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setCurrentWidth(window.innerWidth);
  };

  const handleDelete = (site) => {
    const updatedSiteData = webSitesData.filter((sites) => sites !== site);
    setWebSitesData(updatedSiteData);
  };

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="w-2/3 flex flex-wrap gap-3 justify-center">
        {webSitesData.map((website, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center relative"
            style={
              isDesktop
                ? {
                    width: (0.66 * currentWidth - 12 * 9) / 9,
                  }
                : isTablet
                ? { width: (0.66 * currentWidth - 12 * 5) / 5 }
                : { width: (0.66 * currentWidth - 12 * 3) / 3 }
            }
          >
            {isEdit ? (
              <div className="absolute top-0 right-0 z-50">
                <Button
                  variant="outline"
                  size="icon"
                  // className="absolute top-0 right-0 z-50 flex justify-center items-center"
                  onClick={() => handleDelete(website)}
                >
                  <Trash className="w-[0.9rem] h-[0.9rem]" />
                </Button>
              </div>
            ) : (
              /*  <WebSiteOptions
                website={website}
                webSitesData={webSitesData}
                setWebSitesData={setWebSitesData}
                idx={idx}
                handleDelete={handleDelete}
              /> */
              ""
            )}

            <a href={!isEdit && `https://${website.url}`}>
              <Button
                variant={isEdit ? "disable" : "ghost"}
                className="overflow-hidden rounded-xl w-24 h-24 flex flex-col justify-center items-center px-2 md:px-4"
              >
                <div className="bg-white border-[1px] p-[2px] rounded-xl">
                  <div className="w-10 h-10 text-2xl flex justify-center items-center">
                    <img
                      src={website.img}
                      alt="favicon"
                      className="w-9 rounded-lg"
                    />
                  </div>
                </div>
                <p className="pt-2 text-xs text-foreground  over px-2 whitespace-nowrap">
                  {website.name.length <= 10
                    ? website.name.slice(0, 10)
                    : website.name.slice(0, 10) + "..."}
                </p>
              </Button>
            </a>
          </div>
        ))}

        {webSitesData.length < 9 ? (
          <div
            className="flex justify-center items-center"
            style={
              isDesktop
                ? {
                    width: (0.66 * currentWidth - 12 * 9) / 9,
                  }
                : isTablet
                ? { width: (0.66 * currentWidth - 12 * 6) / 6 }
                : { width: (0.66 * currentWidth - 12 * 4) / 4 }
            }
          >
            <AddWebsite
              webSitesData={webSitesData}
              setWebSitesData={setWebSitesData}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WebSites;
