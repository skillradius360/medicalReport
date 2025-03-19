import React, { useState } from 'react';

const WholeSlideImageViewer = () => {
  // Sample detection data from the provided JSON
  const detectionResults = [
    {"cohort":"Jan","month0":100,"month1":88.8,"month2":79.5,"month3":74.2,"month4":68.2,"month5":65.4,"month6":59.4,"totalUsers":2854},
    {"cohort":"Feb","month0":100,"month1":89.2,"month2":80.6,"month3":72.1,"month4":65.3,"month5":62.3,"month6":55.7,"totalUsers":2960}
  ];

  // Blood cell detection results from the JSON file
  const rbcDetections = 
    [[121, 4, 163, 45, 'Circular_RBC'], [396, 312, 433, 353, 'Circular_RBC'], [388, 90, 428, 130, 'Circular_RBC'], [334, 157, 373, 199, 'Circular_RBC'], [27, 148, 64, 190, 'Circular_RBC'], [89, 339, 131, 380, 'Circular_RBC'], [346, 222, 381, 265, 'Circular_RBC'], [455, 24, 491, 66, 'Circular_RBC'], [250, 374, 287, 412, 'Circular_RBC'], [30, 350, 67, 392, 'Circular_RBC'], [256, 285, 293, 324, 'Circular_RBC'], [118, 316, 158, 354, 'Circular_RBC'], [155, 311, 189, 350, 'Circular_RBC'], [0, 270, 37, 307, 'Circular_RBC'], [248, 409, 285, 448, 'Circular_RBC'], [77, 271, 113, 307, 'Circular_RBC'], [222, 437, 262, 475, 'Circular_RBC'], [126, 41, 163, 79, 'Circular_RBC'], [250, 152, 288, 189, 'Circular_RBC'], [177, 75, 214, 114, 'Circular_RBC'], [157, 446, 196, 484, 'Circular_RBC'], [12, 310, 56, 346, 'Circular_RBC'], [404, 195, 441, 237, 'Circular_RBC'], [464, 135, 499, 171, 'Circular_RBC'], [314, 355, 352, 396, 'Circular_RBC'], [211, 401, 247, 440, 'Circular_RBC'], [55, 190, 94, 229, 'Circular_RBC'], [110, 87, 148, 121, 'Circular_RBC'], [456, 364, 496, 400, 'Circular_RBC'], [466, 296, 505, 342, 'Circular_RBC'], [205, 195, 249, 234, 'Circular_RBC'], [287, 8, 324, 48, 'Circular_RBC'], [315, 128, 344, 170, 'Circular_RBC'], [372, 206, 410, 245, 'Circular_RBC'], [414, 41, 451, 76, 'Circular_RBC'], [103, 118, 142, 156, 'Circular_RBC'], [59, 447, 95, 487, 'Circular_RBC'], [241, 98, 275, 140, 'Circular_RBC'], [419, 256, 455, 296, 'Circular_RBC'], [122, 435, 160, 473, 'Circular_RBC'], [76, 122, 108, 162, 'Circular_RBC'], [155, 130, 193, 166, 'Circular_RBC'], [93, 55, 131, 90, 'Circular_RBC'], [111, 245, 152, 274, 'Circular_RBC'], [291, 433, 326, 473, 'Circular_RBC'], [258, 344, 298, 377, 'Circular_RBC'], [141, 156, 177, 194, 'Circular_RBC'], [210, 341, 244, 382, 'Circular_RBC'], [58, 92, 97, 126, 'Circular_RBC'], [391, 246, 427, 289, 'Circular_RBC'], [418, 126, 454, 164, 'Circular_RBC'], [69, 243, 106, 273, 'Circular_RBC'], [465, 169, 503, 205, 'Circular_RBC'], [193, 290, 232, 323, 'Circular_RBC'], [161, 41, 198, 77, 'Circular_RBC'], [290, 390, 318, 434, 'Circular_RBC'], [382, 359, 419, 394, 'Circular_RBC'], [459, 203, 496, 237, 'Circular_RBC'], [175, 380, 211, 413, 'Circular_RBC'], [289, 284, 329, 318, 'Circular_RBC'], [271, 126, 306, 158, 'Circular_RBC'], [0, 148, 30, 187, 'Circular_RBC'], [174, 0, 209, 37, 'Circular_RBC'], [131, 272, 166, 304, 'Circular_RBC'], [27, 204, 61, 239, 'Circular_RBC'], [251, 249, 288, 283, 'Circular_RBC'], [46, 272, 82, 310, 'Circular_RBC'], [380, 458, 418, 490, 'Circular_RBC'], [402, 10, 440, 43, 'Circular_RBC'], [187, 479, 223, 511, 'Circular_RBC'], [0, 339, 35, 378, 'Circular_RBC'], [354, 432, 393, 465, 'Circular_RBC'], [252, 214, 288, 252, 'Circular_RBC'], [428, 379, 465, 419, 'Circular_RBC'], [142, 407, 176, 442, 'Circular_RBC'], [470, 259, 505, 292, 'Circular_RBC'], [437, 202, 462, 235, 'Circular_RBC'], [39, 62, 93, 93, 'Circular_RBC'], [106, 155, 144, 184, 'Circular_RBC'], [453, 101, 490, 138, 'Circular_RBC'], [354, 87, 389, 125, 'Circular_RBC'], [388, 125, 424, 167, 'Circular_RBC'], [292, 257, 327, 289, 'Circular_RBC'], [317, 221, 350, 260, 'Circular_RBC'], [351, 335, 389, 376, 'Circular_RBC'], [30, 389, 65, 422, 'Circular_RBC'], [166, 200, 202, 234, 'Circular_RBC'], [187, 316, 223, 350, 'Circular_RBC'], [51, 411, 85, 448, 'Circular_RBC'], [349, 268, 384, 300, 'Circular_RBC'], [444, 72, 479, 108, 'Circular_RBC'], [369, 293, 400, 329, 'Circular_RBC'], [501, 175, 512, 223, 'Circular_RBC'], [441, 166, 470, 204, 'Circular_RBC'], [221, 29, 258, 63, 'Circular_RBC'], [309, 306, 343, 340, 'Circular_RBC'], [361, 40, 395, 77, 'Circular_RBC'], [73, 0, 120, 22, 'Circular_RBC'], [10, 94, 49, 134, 'Circular_RBC'], [430, 295, 468, 328, 'Circular_RBC'], [202, 2, 234, 39, 'Circular_RBC'], [327, 32, 365, 64, 'Circular_RBC'], [39, 32, 79, 65, 'Circular_RBC'], [430, 0, 473, 17, 'Circular_RBC'], [59, 485, 94, 512, 'Circular_RBC'], [149, 227, 188, 253, 'Circular_RBC'], [341, 473, 378, 508, 'Circular_RBC'], [487, 38, 512, 75, 'Circular_RBC'], [4, 448, 36, 493, 'Circular_RBC'], [264, 63, 300, 100, 'Circular_RBC'], [191, 141, 220, 176, 'Circular_RBC'], [93, 416, 132, 450, 'Circular_RBC'], [498, 0, 512, 40, 'Circular_RBC'], [305, 193, 338, 230, 'Circular_RBC'], [313, 394, 343, 428, 'Circular_RBC'], [424, 348, 458, 380, 'Circular_RBC'], [488, 227, 512, 263, 'Circular_RBC'], [7, 61, 43, 95, 'Circular_RBC'], [489, 228, 511, 263, 'Circular_RBC'], [305, 496, 345, 512, 'Circular_RBC'], [249, 0, 294, 13, 'Circular_RBC'], [501, 290, 512, 337, 'Circular_RBC'], [421, 420, 455, 457, 'Circular_RBC'], [469, 0, 512, 13, 'Circular_RBC'], [324, 0, 372, 12, 'Circular_RBC'], [373, 0, 407, 25, 'Circular_RBC'], [373, 390, 410, 424, 'Circular_RBC'], [484, 438, 512, 468, 'Circular_RBC'], [70, 369, 106, 419, 'Circular_RBC'], [351, 12, 387, 49, 'Circular_RBC'], [449, 412, 483, 449, 'Circular_RBC'], [378, 487, 418, 511, 'Circular_RBC'], [0, 185, 13, 220, 'Circular_RBC'], [183, 348, 212, 384, 'Circular_RBC'], [266, 475, 297, 511, 'Circular_RBC'], [119, 504, 170, 512, 'Circular_RBC'], [335, 387, 373, 414, 'Circular_RBC'], [363, 41, 394, 77, 'Circular_RBC'], [442, 166, 470, 204, 'Circular_RBC'], [0, 52, 10, 100, 'Circular_RBC'], [737, 213, 778, 257, 'Circular_RBC'], [554, 360, 595, 407, 'Circular_RBC'], [658, 345, 697, 389, 'Circular_RBC'], [882, 427, 923, 469, 'Circular_RBC'], [800, 296, 839, 338, 'Circular_RBC'], [661, 216, 701, 253, 'Circular_RBC'], [568, 20, 613, 56, 'Circular_RBC'], [918, 224, 956, 267, 'Circular_RBC'], [670, 118, 712, 160, 'Circular_RBC'], [626, 400, 664, 440, 'Circular_RBC'], [979, 460, 1015, 500, 'Circular_RBC'], [718, 283, 756, 320, 'Circular_RBC'], [773, 282, 808, 325, 'Circular_RBC'], [910, 180, 946, 217, 'Circular_RBC'], [518, 330, 557, 372, 'Circular_RBC'], [784, 145, 823, 182, 'Circular_RBC'], [722, 405, 763, 443, 'Circular_RBC'], [666, 56, 703, 94, 'Circular_RBC'], [690, 476, 734, 511, 'Circular_RBC'], [803, 411, 842, 446, 'Circular_RBC'], [742, 335, 776, 379, 'Circular_RBC'], [736, 436, 773, 473, 'Circular_RBC'], [619, 201, 653, 238, 'Circular_RBC'], [772, 434, 806, 471, 'Circular_RBC'], [914, 404, 954, 438, 'Circular_RBC'], [575, 420, 614, 460, 'Circular_RBC'], [835, 436, 874, 475, 'Circular_RBC'], [597, 307, 634, 344, 'Circular_RBC'], [941, 59, 978, 98, 'Circular_RBC'], [719, 118, 756, 156, 'Circular_RBC'], [542, 463, 580, 500, 'Circular_RBC'], [643, 295, 682, 333, 'Circular_RBC'], [558, 255, 595, 291, 'Circular_RBC'], [707, 323, 747, 360, 'Circular_RBC'], [777, 78, 814, 113, 'Circular_RBC'], [744, 142, 782, 179, 'Circular_RBC'], [915, 290, 953, 327, 'Circular_RBC'], [855, 156, 892, 201, 'Circular_RBC'], [857, 250, 896, 284, 'Circular_RBC'], [707, 15, 744, 53, 'Circular_RBC'], [959, 34, 998, 66, 'Circular_RBC'], [714, 85, 753, 118, 'Circular_RBC'], [891, 320, 930, 355, 'Circular_RBC'], [686, 153, 725, 188, 'Circular_RBC'], [522, 410, 564, 444, 'Circular_RBC'], [979, 424, 1016, 462, 'Circular_RBC'], [566, 69, 602, 111, 'Circular_RBC'], [939, 453, 979, 489, 'Circular_RBC'], [860, 0, 895, 40, 'Circular_RBC'], [895, 133, 933, 171, 'Circular_RBC'], [699, 201, 734, 234, 'Circular_RBC'], [876, 206, 914, 241, 'Circular_RBC'], [732, 174, 766, 207, 'Circular_RBC'], [643, 475, 682, 511, 'Circular_RBC'], [851, 373, 889, 408, 'Circular_RBC'], [712, 51, 749, 91, 'Circular_RBC'], [599, 384, 634, 421, 'Circular_RBC'], [658, 384, 698, 424, 'Circular_RBC'], [771, 331, 806, 368, 'Circular_RBC'], [870, 475, 915, 511, 'Circular_RBC'], [792, 108, 828, 141, 'Circular_RBC'], [763, 180, 802, 213, 'Circular_RBC'], [832, 63, 866, 103, 'Circular_RBC'], [862, 57, 901, 99, 'Circular_RBC'], [722, 255, 759, 288, 'Circular_RBC'], [829, 324, 864, 365, 'Circular_RBC'], [809, 369, 850, 400, 'Circular_RBC'], [970, 270, 1018, 299, 'Circular_RBC'], [696, 437, 731, 474, 'Circular_RBC'], [861, 280, 901, 317, 'Circular_RBC'], [601, 260, 634, 297, 'Circular_RBC'], [837, 223, 874, 259, 'Circular_RBC'], [772, 471, 811, 507, 'Circular_RBC'], [794, 21, 833, 54, 'Circular_RBC'], [953, 400, 989, 438, 'Circular_RBC'], [860, 342, 897, 374, 'Circular_RBC'], [694, 349, 728, 393, 'Circular_RBC'], [586, 204, 620, 241, 'Circular_RBC'], [739, 28, 774, 68, 'Circular_RBC'], [670, 316, 709, 349, 'Circular_RBC'], [673, 0, 714, 26, 'Circular_RBC'], [918, 0, 954, 31, 'Circular_RBC'], [806, 242, 838, 280, 'Circular_RBC'], [983, 143, 1018, 181, 'Circular_RBC'], [861, 128, 899, 161, 'Circular_RBC'], [780, 208, 818, 239, 'Circular_RBC'], [896, 98, 930, 136, 'Circular_RBC'], [954, 244, 991, 278, 'Circular_RBC'], [699, 231, 735, 266, 'Circular_RBC'], [512, 177, 537, 219, 'Circular_RBC'], [528, 273, 560, 322, 'Circular_RBC'], [866, 403, 908, 436, 'Circular_RBC'], [927, 92, 964, 131, 'Circular_RBC'], [631, 47, 666, 81, 'Circular_RBC'], [512, 455, 543, 493, 'Circular_RBC'], [647, 11, 684, 48, 'Circular_RBC'], [512, 118, 538, 157, 'Circular_RBC'], [824, 471, 860, 511, 'Circular_RBC'], [979, 310, 1016, 348, 'Circular_RBC'], [910, 346, 951, 381, 'Circular_RBC'], [771, 51, 811, 79, 'Circular_RBC'], [979, 382, 1016, 419, 'Circular_RBC'], [957, 1, 993, 36, 'Circular_RBC'], [646, 155, 680, 190, 'Circular_RBC'], [945, 201, 980, 236, 'Circular_RBC'], [531, 202, 569, 234, 'Circular_RBC'], [569, 288, 602, 322, 'Circular_RBC'], [584, 169, 619, 206, 'Circular_RBC'], [633, 344, 662, 386, 'Circular_RBC'], [559, 104, 602, 139, 'Circular_RBC'], [917, 40, 953, 75, 'Circular_RBC'], [621, 0, 663, 22, 'Circular_RBC'], [848, 309, 886, 345, 'Circular_RBC'], [548, 148, 590, 184, 'Circular_RBC'], [817, 179, 850, 214, 'Circular_RBC'], [663, 180, 694, 219, 'Circular_RBC'], [581, 137, 618, 171, 'Circular_RBC'], [878, 177, 913, 210, 'Circular_RBC'], [520, 240, 556, 275, 'Circular_RBC'], [887, 373, 925, 410, 'Circular_RBC'], [512, 75, 538, 117, 'Circular_RBC'], [742, 381, 778, 413, 'Circular_RBC'], [611, 234, 647, 266, 'Circular_RBC'], [512, 292, 536, 332, 'Circular_RBC'], [599, 470, 635, 508, 'Circular_RBC'], [839, 105, 866, 135, 'Circular_RBC'], [1013, 305, 1024, 347, 'Circular_RBC'], [512, 33, 521, 80, 'Circular_RBC'], [582, 458, 612, 505, 'Circular_RBC'], [805, 0, 845, 26, 'Circular_RBC'], [913, 488, 952, 512, 'Circular_RBC'], [994, 213, 1023, 253, 'Circular_RBC'], [523, 0, 562, 22, 'Circular_RBC'], [999, 113, 1024, 147, 'Circular_RBC'], [638, 255, 670, 286, 'Circular_RBC'], [1010, 412, 1024, 455, 'Circular_RBC'], [775, 235, 812, 271, 'Circular_RBC'], [595, 77, 630, 113, 'Circular_RBC'], [512, 222, 522, 268, 'Circular_RBC'], [865, 402, 907, 438, 'Circular_RBC'], [854, 475, 877, 512, 'Circular_RBC'], [777, 391, 819, 419, 'Circular_RBC'], [916, 375, 957, 409, 'Circular_RBC'], [707, 0, 757, 11, 'Circular_RBC'], [611, 164, 645, 198, 'Circular_RBC'], [527, 382, 560, 412, 'Circular_RBC'], [942, 488, 982, 512, 'Circular_RBC'], [523, 501, 572, 512, 'Circular_RBC'], [547, 433, 581, 467, 'Circular_RBC'], [580, 458, 611, 507, 'Circular_RBC'], [1000, 36, 1024, 67, 'Circular_RBC'], [626, 74, 655, 99, 'Circular_RBC'], [512, 76, 537, 117, 'Circular_RBC'], [994, 243, 1023, 274, 'Circular_RBC'], [925, 374, 958, 409, 'Circular_RBC'], [967, 0, 1013, 11, 'Circular_RBC'], [520, 0, 563, 24, 'Circular_RBC']
    // Just a sample - in reality we would use all the data
  ];

  // Cell counts from the wireframe
  const cellCounts = {
    rbc: {
      "Angular Cells": 222,
      "Borderline Dystocytes": 50,
      "Burr Cells": 87,
      "Fragmented Cells": 2,
      "Ovalocytes": "",
      "Rounded RBC": "",
      "Teardrops": ""
    },
    wbc: {
      "Basophil": 222,
      "Eosinophil": 50,
      "Lymphocyte": 87,
      "Monocyte": 2
    },
    platelets: {
      "Count": 222,
      "Percentage": 222
    }
  };

  // Calculate percentages
  const rbcPercentages = {
    "Angular Cells": "67%",
    "Borderline Dystocytes": "20%",
    "Burr Cells": "34%",
    "Fragmented Cells": "0.12%",
    "Ovalocytes": "",
    "Rounded RBC": "",
    "Teardrops": ""
  };

  const wbcPercentages = {
    "Basophil": "67%",
    "Eosinophil": "20%",
    "Lymphocyte": "34%",
    "Monocyte": "0.12%"
  };

  // State variables
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [zoomRegion, setZoomRegion] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const patientID = "5003";
  const currentDate = "Mon Oct 07 2024 15:39:07";

  // Toggle zoom function
  const toggleZoom = () => {
    setIsZoomedIn(!isZoomedIn);
  };

  // Function to render the blood cell image with or without bounding boxes
  const renderWSIView = () => {
    return (
      <div 
        className="relative w-full border border-gray-300 cursor-pointer" 
        style={{ height: isZoomedIn ? '400px' : '250px' }}
        onClick={toggleZoom}
      >
        <img 
          src="./wsi-image.png" 
          alt="Blood cell sample" 
          className="w-full h-full object-cover"
        />
        
        {/* Only render bounding boxes when zoomed in */}
        {isZoomedIn && rbcDetections.map((detection, index) => {
          const [x1, y1, x2, y2] = detection;
          const width = x2 - x1;
          const height = y2 - y1;
          
          return (
            <div 
              key={index}
              className="absolute border-2 border-blue-500"
              style={{
                left: `${(x1/512)*100}%`,
                top: `${(y1/512)*100}%`,
                width: `${(width/512)*100}%`,
                height: `${(height/512)*100}%`
              }}
            />
          );
        })}
        
        {/* Show an indicator in the corner about zoom state */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          {isZoomedIn ? 'Zoomed In - Click to Zoom Out' : 'Zoomed Out - Click to Zoom In'}
        </div>
        
        {/* If zoomed out, show an indicator for the region that will be zoomed in */}
        {!isZoomedIn && (
          <div className="absolute border-2 border-red-500 pointer-events-none" 
            style={{
              left: `${zoomRegion.x}%`,
              top: `${zoomRegion.y}%`,
              width: `${zoomRegion.width}%`,
              height: `${zoomRegion.height}%`
            }}
          />
        )}
      </div>
    );
  };

  // Function to render the table rows
  const renderTableRows = (data, percentages) => {
    return Object.keys(data).map(key => (
      <tr key={key} className="border-b border-gray-200">
        <td className="p-2 text-left">{key}</td>
        <td className="p-2 text-center">{data[key]}</td>
        <td className="p-2 text-center">{percentages[key]}</td>
      </tr>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 p-3 border-b border-gray-200 flex justify-between items-center">
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            ← Back
          </button>
          <div className="text-center font-medium">{currentDate}</div>
          <div className="text-sm text-gray-500">
            Patient ID: {patientID}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Left Panel - Cell Counts */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="font-bold mb-2">RBC</h3>
              <table className="w-full border-collapse bg-green-50">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-2 text-left">Type</th>
                    <th className="p-2 text-center">Count</th>
                    <th className="p-2 text-center">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows(cellCounts.rbc, rbcPercentages)}
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">WBC</h3>
              <table className="w-full border-collapse bg-green-50">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-2 text-left">Type</th>
                    <th className="p-2 text-center">Count</th>
                    <th className="p-2 text-center">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows(cellCounts.wbc, wbcPercentages)}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-bold mb-2">Platelets</h3>
              <table className="w-full border-collapse bg-green-50">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-2 text-left">Type</th>
                    <th className="p-2 text-center">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 text-left">Count</td>
                    <td className="p-2 text-center">{cellCounts.platelets.Count}</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-left">Percentage</td>
                    <td className="p-2 text-center">{cellCounts.platelets.Percentage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Center & Right Panel - Combined WSI View with toggle zoom */}
          <div className="col-span-2">
            <div className="text-center font-bold mb-2">
              {isZoomedIn ? 'WSI Zoomed In View (Click to Zoom Out)' : 'WSI View (Click to Zoom In)'}
            </div>
            {renderWSIView()}
            
            <div className="flex justify-between items-center mt-4">
              
              
              <button className="bg-white border border-gray-300 rounded px-6 py-2 hover:bg-gray-50">
                Generate Report
              </button>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
              <h3 className="font-bold mb-2">Viewing Information</h3>
              <div className="text-sm">
                <p>
                  {isZoomedIn 
                    ? 'You are currently viewing the zoomed in WSI with RBC detection boxes highlighted. Click the image or use the buttons to zoom out.'
                    : 'You are currently viewing the zoomed out WSI overview. Click the image or use the buttons to zoom in and see RBC detection boxes.'}
                </p>
                <p className="mt-2">Total detected cells: {rbcDetections.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeSlideImageViewer;
