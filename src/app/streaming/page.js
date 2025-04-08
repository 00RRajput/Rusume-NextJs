"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {fetchData} from '../utils/axios-instance';
import {WatchModeApi} from '../utils/wm-instance';

export default function Streaming() {

  const [releases, setReleases] = useState(null);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      // let url ='https://api.watchmode.com/v1/sources?apiKey=lOd9ycP8JmrLxX7QjBR0fPRjk1liDMwVDJY4vj9Q';
      // const options = {
      //   method: 'GET',
      //   url: url,
        // params: {
        //   output_language: 'en'
        // },
        // headers: {
        //   'x-rapidapi-key': 'eb2f2e2c5dmshc66fe035c3fd585p1d58bbjsn554d1190630e',
        //   'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        // }
      // };

      // let url2 = 'https://api.watchmode.com/v1/list-titles/?apiKey=lOd9ycP8JmrLxX7QjBR0fPRjk1liDMwVDJY4vj9Q';
      // const options2 = {
      //   method: 'GET',
      //   url: url2,
      // };

      try {
        // const data = await fetchData(url, options);
        // const data2 = await WatchModeApi('GET', 'list-titles');
        const releasesData = await WatchModeApi('GET', 'releases');
        const releasesData2 = await WatchModeApi('GET', `title/3207606/episodes`);

        
        setReleases(releasesData);
        console.log('Fetched data:',releasesData, releasesData2);
      } catch (error) {
        // setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  
  return (
    <>
        <h1 className="text-blue-500">HEllo</h1>

        {releases && releases.releases.map((data, key) => {
          // console.log(data);
          return (
            <div className="max-w-sm w-full lg:max-w-full lg:flex" key={key}>
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${data.poster_url})` }}
                title="Woman holding a mug"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {data.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">
                      {data.type}
                    </p>
                    <p className="text-gray-600">Source Release Date: {data.source_release_date}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
