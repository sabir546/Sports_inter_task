import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FaChevronLeft } from "react-icons/fa";
import { useTheme } from "../ContextNav/ThemeContext";
import { FaChevronRight } from "react-icons/fa";

const CollectionsCard: React.FC = () => {
  const { theme } = useTheme();
  return (
    
    <div
    
      className={`${
        theme === "light"
          ? "bg-gray-100"
          : "bg-gradient-to-b from-green-950/100 to-rose-950/80"
      } Card min-h-screen py-5 `}
    >
      <div className=" text-center  font-bold">
        <h1
          className={`${
            theme === "light" ? "text-gray-900" : "text-white"
          }  lg:text-6xl text-4xl mb-5`}
        >
          Collection Spotlight
        </h1>
        <h5
          className={`${
            theme === "light" ? "text-gray-700" : "text-zinc-400"
          } lg:mb-10 sm:mb-7 `}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets-excutive access to prmium events for unforgettable <br />{" "}
          experience Grab yours today!
        </h5>
      </div>
      <div className="flex items-center justify-center gap-10 ">
        <button className="border border-blue-600 lg:px-2 px-0  lg:py-4 py-3 text-blue-700 lg:text-3xl sm:text-xl lg:mr-10 -mr-10">
          <FaChevronLeft />
        </button>
        <div className=" flex flex-wrap justify-center gap-10 ">
          <Card>
            <div
              className={`${
                theme === "light" ? "bg-white" : "bg-zinc-700"
              } w-[16rem] p-3`}
            >
              <CardMedia
                sx={{ height: 400 }}
                image="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__"
                title="green iguana"
              />
              <div className="text-zinc-400 ... mt-5 ml-1">
                {" "}
                - - - - - - - - - - - - - - - - - - - - -
              </div>

              <CardContent
                className={theme === "light" ? "text-gray-900" : "text-white"}
              >
                <h2 className="card text-center text-xl font-bold">
                  Las Vegas Aviators{" "}
                </h2>
              </CardContent>
              <div className="">
                <CardActions className="flex items-center ">
                  <h6
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-center -mt-4" size="small" `}
                  >
                    <span
                      className={`${
                        theme === "light" ? "text-black" : "text-white"
                      } text-m`}
                    >
                      OCT 15 | SUN | 4:30 PM
                    </span>
                    <br />
                    <p
                      className={
                        theme === "light" ? "text-gray-700" : "text-zinc-300"
                      }
                    >
                      Las Vegas Ballpark, las Vegas,
                      <br /> Nevada
                    </p>
                  </h6>
                  <h5 className="text-sm"></h5>
                </CardActions>
                <button className="px-8 py-2 bg-black text-white text-center ml-2 mt-3 ">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </Card>

          <Card>
            <div
              className={`${
                theme === "light" ? "bg-white" : "bg-zinc-700"
              } w-[16rem] p-3`}
            >
              <CardMedia
                sx={{ height: 400 }}
                image="https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZo-HQ4yJRY~dUhQcMhA~35ZvUBoWGsttz-dbuwWCwNS-iagfxSXy8D0wUbI7E0DtSys0IP8ys-zbJuneStuL89zYqwmiiGVmsdfbrviRd6~-DGtSY7jg9VG35saVyEF3V~BTigA4UsAzQEEkcd7ssgXdLgzvSXbjHkkD6JEvWERD5g2nyW5VhZrl2r2c451ij7Z3hZ6tp6eC9J-Ld638EcfKZDBYQt5iGlni8bR8zqaj4JSsszlF5aJkYBI0ldvKZIGpVnBoHqM0813dNDn7gMb~NO7LRoH0DSqjqp6BgcRPG37D07lph~ZABSka-tuFZeA8LfLOvJ2yX06qmNe1A__"
                title="green iguana"
              />
              <div className="text-zinc-400 ... mt-5 ml-1">
                {" "}
                - - - - - - - - - - - - - - - - - - - - -
              </div>

              <CardContent
                className={theme === "light" ? "text-gray-900" : "text-white"}
              >
                <h2 className="card text-center text-xl font-bold">
                  Sacramento River{" "}
                </h2>
              </CardContent>
              <div className="">
                <CardActions className="flex items-center ">
                  <h6
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-center -mt-4" size="small" `}
                  >
                    <span
                      className={`${
                        theme === "light" ? "text-black" : "text-white"
                      } text-m`}
                    >
                      OCT 15 | SUN | 4:30 PM
                    </span>
                    <br />
                    <p
                      className={
                        theme === "light" ? "text-gray-700" : "text-zinc-300"
                      }
                    >
                      Las Vegas Ballpark, las Vegas,
                      <br /> Nevada
                    </p>
                  </h6>
                  <h5 className="text-sm"></h5>
                </CardActions>
                <button className="px-8 py-2 bg-black text-white text-center ml-2 mt-3 ">
                  Orange Collection
                </button>
              </div>
            </div>
          </Card>

          <Card>
            <div
              className={`${
                theme === "light" ? "bg-white" : "bg-zinc-700"
              } w-[16rem] p-3`}
            >
              <CardMedia
                sx={{ height: 400 }}
                image="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMcy78xquYbaN8LDV49nkGXXnYs6VzJ5LHDiCoZHdvTnvdmhJEgHiu4-QkzPxG1IxGfnAoKtD9zDv-jhFQqpi7wNJlIiAspvtA7Wp4RNHO7nRxid5NLwFXYPjabVtQrN8AQv7b7uNBsxg8ikgHUxAY0~A6LEmTyJfJsfM3ke8c2TOlT3jIfkx6KKZQ2fry3wskWhztiE~B2XjvOJlE417Ld8WIUWo6xCE-E0u1MVjqGqP8s~g0hMbqjZFh2JvEpbh1cWjTimArviIO6RbPEhfjMEdC6zo7LtCuE-XEanZFycRZ1gBXrnfoiLBDoeCkq6lRCYVeMHAngb8~0wbKgGUw__"
                title="green iguana"
              />
              <div className="text-zinc-400 ... mt-5 ml-1">
                {" "}
                - - - - - - - - - - - - - - - - - - - - -
              </div>

              <CardContent
                className={theme === "light" ? "text-gray-900" : "text-white"}
              >
                <h2 className="card text-center text-xl font-bold">
                  Las Vegas Aviators{" "}
                </h2>
              </CardContent>
              <div className="">
                <CardActions className="flex items-center ">
                  <h6
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } text-center -mt-4" size="small" `}
                  >
                    <span
                      className={`${
                        theme === "light" ? "text-black" : "text-white"
                      } text-m`}
                    >
                      OCT 15 | SUN | 4:30 PM
                    </span>
                    <br />
                    <p
                      className={
                        theme === "light" ? "text-gray-700" : "text-zinc-300"
                      }
                    >
                      Las Vegas Ballpark, las Vegas,
                      <br /> Nevada
                    </p>
                  </h6>
                  <h5 className="text-sm"></h5>
                </CardActions>
                <button className="px-8 py-2 bg-black text-white text-center ml-2 mt-3 ">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </Card>

         
        </div>
        <button className="border border-blue-600 lg:px-2 px-0 lg:py-4 py-3 text-blue-700 lg:text-3xl sm:text-xl lg:ml-10 -ml-10">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CollectionsCard;
