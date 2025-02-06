const { exec } = require("child_process");

class ScanController {
  constructor() {
    this.formatNmapOutput = this.formatNmapOutput.bind(this)
    this.scanUtil = this.scanUtil.bind(this)
    this.scan = this.scan.bind(this)
  }
  async scan(req, res) {
    const target = req.body.target;

    if (!target) {
      return res.status(400).json({ error: "Target is required" });
    }

    try {
      const result = await this.scanUtil(target);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  scanUtil(target) {
    return new Promise((resolve, reject) => {
      exec(`nmap -sV ${target} -oN -`, (error, stdout, stderr) => {
        if (error) {
          return reject(new Error(stderr || stdout));
        }
        resolve(this.formatNmapOutput(stdout));
      });
    });
  }

  formatNmapOutput(data) {
    return data
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .join("<br>");
  }
}
module.exports = ScanController;