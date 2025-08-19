import Image from "next/image";
import { Box, Modal, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function HeroImage({ heroImage }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Main Hero Image */}
      <Box
        onClick={handleOpen}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "70vh", md: "80vh" },
          borderRadius: "10px 10px",
          overflow: "hidden",
          cursor: "pointer",
          "&:hover": {
            "& > .overlay": {
              opacity: 1,
            },
          },
        }}
      >
        <Image
          src={heroImage}
          alt="Sobha One Element interior"
          width={1920}
          height={1080}
          priority={true}
          quality={85}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              color: "white",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            Click to expand
          </Box>
        </Box>
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "95%",
            height: "95vh",
            maxWidth: "2000px",
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Lightbox Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <Image
              src={heroImage}
              alt="Sobha One Element interior"
              fill
              quality={100}
              priority={true}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
