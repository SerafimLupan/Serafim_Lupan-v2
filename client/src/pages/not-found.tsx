import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const asciiArt = `
  '7MN.   '7MF'            mm         '7MM"""YMM                                         '7MM  
    MMN.    M              MM           MM    '7                                           MM  
    M YMb   M   ,pW"Wq.  mmMMmm         MM   d    ,pW"Wq.  '7MM  '7MM  '7MMpMMMb.     ,M""bMM  
    M  'MN. M  6W'   'Wb   MM           MM""MM   6W'   'Wb   MM    MM    MM    MM   ,AP    MM  
    M   'MM.M  8M     M8   MM           MM   Y   8M     M8   MM    MM    MM    MM   8MI    MM  
    M     YMM  YA.   ,A9   MM           MM       YA.   ,A9   MM    MM    MM    MM   'Mb    MM  
  .JML.    YM   'Ybmd9'     'Mbmo     .JMML.      'Ybmd9'    'Mbod"YML..JMML  JMML. 'Wbmd"MML.
  `;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-green-500 font-mono p-4">
      {/* Container pentru ASCII Art - Overflow auto pentru ecrane mici */}
      <div className="w-full overflow-x-auto flex justify-center mb-8">
        <pre className="text-[10px] md:text-sm leading-none opacity-80 animate-pulse">
          {asciiArt}
        </pre>
      </div>

      <div className="max-w-md text-center border border-green-900 p-8 bg-black/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
        <h2 className="text-2xl mb-4 text-green-400 uppercase tracking-widest">
          [!] Error: 404_PAGE_NOT_FOUND
        </h2>
        
        <p className="mb-8 text-green-700">
          The requested resource is missing from the server. <br />
          Unauthorized access or dead link detected.
        </p>

        <Link href="/">
          <Button 
            variant="outline" 
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 font-mono"
          >
            &gt; RETURN_TO_BASE
          </Button>
        </Link>
      </div>

      <div className="mt-8 text-[10px] text-green-900 uppercase">
        System Status: Running | Unauthorized Attempts: Logged
      </div>
    </div>
  );
}
